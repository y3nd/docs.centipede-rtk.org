<script setup>
import { computed, ref } from "vue";

const endpointBase = "https://crtk-mpchecker.y3n.co";
const minMountpointLength = 1;
const maxMountpointLength = 4;

const mountpoint = ref("");
const loading = ref(false);
const result = ref("");
const error = ref("");
const checkedMountpoint = ref("");
const props = defineProps({
  lang: {
    type: String,
    default: "en",
  },
});

const normalizedMountpoint = computed(() => mountpoint.value.trim().toUpperCase());
const isTaken = computed(() => result.value === "TAKEN");

const messages = {
  en: {
    label: "Check mountpoint availability",
    placeholder: "Enter a mountpoint",
    checking: "Checking...",
    check: "Check",
    mountpointRequired: "Please enter a mountpoint.",
    mountpointTooShort: ({ min }) =>
      `Mountpoint name is too short (minimum ${min} characters).`,
    mountpointTooLong: ({ max }) =>
      `Mountpoint name is too long (maximum ${max} characters).`,
    unknownError: "Unknown error",
    status: {
      taken: "is not available",
      available: "is available",
    },
    sentence: ({ mountpointName, status }) =>
      `Mountpoint name \"${mountpointName}\" ${status}.`,
  },
  fr: {
    label: "Vérifier la disponibilité d'un point de montage",
    placeholder: "Saisissez un point de montage",
    checking: "Vérification...",
    check: "Vérifier",
    mountpointRequired: "Veuillez saisir un point de montage.",
    mountpointTooShort: ({ min }) =>
      `Le nom du point de montage est trop court (${min} caractères minimum).`,
    mountpointTooLong: ({ max }) =>
      `Le nom du point de montage est trop long (${max} caractères maximum).`,
    unknownError: "Erreur inconnue",
    status: {
      taken: "n'est pas disponible",
      available: "est disponible",
    },
    sentence: ({ mountpointName, status }) =>
      `Le point de montage \"${mountpointName}\" ${status}.`,
  },
};

const t = computed(() => messages[props.lang] ?? messages.en);
const resultSentence = computed(() => {
  if (!result.value || !checkedMountpoint.value) {
    return "";
  }

  const status = isTaken.value ? t.value.status.taken : t.value.status.available;
  return t.value.sentence({
    mountpointName: checkedMountpoint.value,
    status,
  });
});

async function checkAvailability() {
  error.value = "";

  if (!normalizedMountpoint.value) {
    error.value = t.value.mountpointRequired;
    return;
  }

  if (normalizedMountpoint.value.length < minMountpointLength) {
    error.value = t.value.mountpointTooShort({ min: minMountpointLength });
    return;
  }

  if (normalizedMountpoint.value.length > maxMountpointLength) {
    error.value = t.value.mountpointTooLong({ max: maxMountpointLength });
    return;
  }

  loading.value = true;
  result.value = "";
  checkedMountpoint.value = normalizedMountpoint.value;

  try {
    const response = await fetch(
      `${endpointBase}/${encodeURIComponent(normalizedMountpoint.value)}`,
      {
        method: "GET",
      },
    );

    const text = (await response.text()).trim();

    if (!response.ok) {
      throw new Error(text || `Request failed with status ${response.status}`);
    }

    result.value = text;
  } catch (err) {
    error.value = err instanceof Error ? err.message : t.value.unknownError;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="mp-checker">
    <label class="mp-checker__label" for="mountpoint-input">
      {{ t.label }}
    </label>

    <div class="mp-checker__row">
      <input
        id="mountpoint-input"
        v-model="mountpoint"
        class="mp-checker__input"
        type="text"
        :placeholder="t.placeholder"
        @keyup.enter="checkAvailability"
      >

      <button
        class="mp-checker__button"
        type="button"
        :disabled="loading"
        @click="checkAvailability"
      >
        {{ loading ? t.checking : t.check }}
      </button>
    </div>

    <p
      v-if="result"
      class="mp-checker__message"
      :class="isTaken ? 'mp-checker__message--taken' : 'mp-checker__message--available'"
    >
      {{ resultSentence }}
    </p>

    <p v-if="error" class="mp-checker__message mp-checker__message--errored">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.mp-checker {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
}

.mp-checker__label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.mp-checker__row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.mp-checker__input {
  flex: 1;
  min-width: 0;
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  font-family: inherit;
}

.mp-checker__button {
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  color: white;
  cursor: pointer;
  font-weight: 600;
}

.mp-checker__button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.mp-checker__message {
  margin: 0.85rem 0 0;
}

.mp-checker__message--taken {
  color: #c0392b;
}

.mp-checker__message--available {
  color: #1e8449;
}

.mp-checker__message--errored {
  color: #6b7280;
}

@media (max-width: 640px) {
  .mp-checker__row {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
