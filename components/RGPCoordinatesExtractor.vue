<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "en",
  },
});

const loading = ref(false);
const output = ref("");
const error = ref("");
const copied = ref(false);

const targetSystems = ["RGF93", "RGR92", "RGSPM06", "RGAF09", "RGFG95"];

const messages = {
  en: {
    label: "Extract geographic coordinates from a text file",
    extractPlaceholder: "Select a GNSS report text file",
    copy: "Copy",
    copied: "Copied",
    noFile: "Please select a text file.",
    readError: "Unable to read the selected file.",
    parseError:
      "Could not find a supported target coordinate block in the file.",
    unknownError: "Unknown error",
    outputLabel: "Formatted output",
  },
  fr: {
    label: "Extraire les coordonnées géographiques depuis un fichier texte",
    extractPlaceholder: "Sélectionnez un fichier texte de compte-rendu GNSS",
    copy: "Copier",
    copied: "Copié",
    noFile: "Veuillez sélectionner un fichier texte.",
    readError: "Impossible de lire le fichier sélectionné.",
    parseError:
      "Impossible de trouver un bloc de coordonnées cible pris en charge dans le fichier.",
    unknownError: "Erreur inconnue",
    outputLabel: "Sortie formatée",
  },
};

const t = computed(() => messages[props.lang] ?? messages.en);

function normalizeText(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/Â/g, "")
    .replace(/[º]/g, "°")
    .replace(/[‐-‒–—]/g, "-");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("read_error"));

    reader.readAsText(file);
  });
}

function extractFromTargetBlock(text, systemName) {
  const numberPattern = "([+-]?\\d+(?:\\.\\d+)?)";

  const blockRegex = new RegExp(
    `POSITION\\s+${escapeRegExp(systemName)}\\s+COORDONNEES\\s+GEOGRAPHIQUES\\s*:\\s*[\\s\\S]*?(?=\\n\\s*(?:={3,}|POSITION\\s+[A-Z0-9]+\\s+(?:EPOQUE|COORDONNEES)|QUALITE\\b|EXACTITUDE\\b|$))`,
    "i",
  );

  const blockMatch = text.match(blockRegex);
  if (!blockMatch) {
    return null;
  }

  const block = blockMatch[0];

  const directRegex = new RegExp(
    `LONGITUDE\\s+${numberPattern}\\s*(?:°)?\\s+LATITUDE\\s+${numberPattern}\\s*(?:°)?\\s+HELL\\s+${numberPattern}`,
    "i",
  );

  const directMatch = block.match(directRegex);
  if (directMatch) {
    const longitude = directMatch[1];
    const latitude = directMatch[2];
    const hell = directMatch[3];
    return `${latitude} ${longitude} ${hell}`;
  }

  const longitudeMatch = block.match(
    new RegExp(`LONGITUDE\\s+${numberPattern}`, "i"),
  );
  const latitudeMatch = block.match(
    new RegExp(`LATITUDE\\s+${numberPattern}`, "i"),
  );
  const hellMatch = block.match(
    new RegExp(`HELL\\s+${numberPattern}`, "i"),
  );

  if (longitudeMatch && latitudeMatch && hellMatch) {
    return `${latitudeMatch[1]} ${longitudeMatch[1]} ${hellMatch[1]}`;
  }

  return null;
}

function parseCoordinates(text) {
  const normalized = normalizeText(text);

  for (const systemName of targetSystems) {
    const result = extractFromTargetBlock(normalized, systemName);
    if (result) {
      return result;
    }
  }

  return null;
}

async function extractFromFile(file) {
  error.value = "";
  output.value = "";
  copied.value = false;

  if (!file) {
    error.value = t.value.noFile;
    return;
  }

  loading.value = true;

  try {
    const text = await readFileAsText(file);
    const parsed = parseCoordinates(text);

    if (!parsed) {
      error.value = t.value.parseError;
      return;
    }

    output.value = parsed;
  } catch (err) {
    error.value =
      err instanceof Error && err.message === "read_error"
        ? t.value.readError
        : t.value.unknownError;
  } finally {
    loading.value = false;
  }
}

function onFileChange(event) {
  const file = event.target.files?.[0] ?? null;
  extractFromFile(file);
}

async function copyOutput() {
  if (!output.value) {
    return;
  }

  try {
    await navigator.clipboard.writeText(output.value);
    copied.value = true;
  } catch {
    const input = document.createElement("input");
    input.value = output.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    copied.value = true;
  }
}
</script>

<template>
  <div class="geo-extractor">
    <label class="geo-extractor__label" for="geo-file-input">
      {{ t.label }}
    </label>

    <input
      id="geo-file-input"
      class="geo-extractor__file"
      type="file"
      accept=".txt,text/plain"
      :aria-label="t.extractPlaceholder"
      @change="onFileChange"
    >

    <label
      v-if="output"
      class="geo-extractor__label geo-extractor__label--output"
      for="geo-output"
    >
      {{ t.outputLabel }}
    </label>

    <div v-if="output" class="geo-extractor__row">
      <input
        id="geo-output"
        class="geo-extractor__input"
        type="text"
        :value="output"
        readonly
      >

      <button
        class="geo-extractor__button"
        type="button"
        @click="copyOutput"
      >
        {{ copied ? t.copied : t.copy }}
      </button>
    </div>

    <p v-if="error" class="geo-extractor__message geo-extractor__message--error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.geo-extractor {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
}

.geo-extractor__label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.geo-extractor__label--output {
  margin-top: 0.85rem;
}

.geo-extractor__row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.geo-extractor__file,
.geo-extractor__input {
  width: 100%;
  min-width: 0;
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: inherit;
  box-sizing: border-box;
}

.geo-extractor__file::file-selector-button {
  margin-right: 0.75rem;
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  color: white;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}

.geo-extractor__file::-webkit-file-upload-button {
  margin-right: 0.75rem;
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  color: white;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}

.geo-extractor__input[readonly] {
  cursor: text;
}

.geo-extractor__button {
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  color: white;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
}

.geo-extractor__message {
  margin: 0.85rem 0 0;
}

.geo-extractor__message--error {
  color: #6b7280;
}

@media (max-width: 640px) {
  .geo-extractor__row {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>