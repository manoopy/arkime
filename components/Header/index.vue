<script lang="ts" setup>
const links = [
  {
    label: "Sessions",
    to: "/",
  },
  {
    label: "SPIView",
    to: "/spiview",
  },
  {
    label: "SPIGraph",
    to: "/spigraph",
  },
  {
    label: "Connections",
    to: "/connections",
  },
  {
    label: "Hunt",
    to: "/hunt",
  },
  {
    label: "Files",
    to: "/files",
  },
  {
    label: "Stats",
    to: "/stats",
  },
  {
    label: "Upload",
    to: "/upload",
  },
];

const modalIsOpen = ref(false);
const items = [
  [
    {
      label: "New View",
      icon: "i-heroicons-document-plus-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
    {
      label: "View Lists",
      icon: "i-heroicons-clipboard-document-list-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
  ],

  [
    {
      label: "Export PCAP",
      icon: "i-heroicons-document-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
    {
      label: "Export CSV",
      icon: "i-heroicons-document-text-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
    {
      label: "Add Tags",
      icon: "i-heroicons-tag-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
    {
      label: "Export Intersection",
      icon: "i-heroicons-at-symbol-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
    {
      label: "Create Periodic Query",
      icon: "i-heroicons-magnifying-glass-solid",
      click: () => {
        modalIsOpen.value = true;
      },
    },
  ],
];

const times = [
  "Last hour",
  "Last 6 hour",
  "Last 24 hour",
  "Last day",
  "Last week",
  "Last month",
  "Last year",
];

const boundings = [
  "First Packet",
  "Last Packet",
  "Bounding",
  "Session Overlaps",
  "Database",
];

const intervals = ["Auto", "Seconds", "Minutes", "Hours", "Days"];

const isOpen = ref(true);
const search = ref("");

const state = reactive({
  time: times[0],
  from: "",
  to: "",
  bounding: boundings[0],
  interval: intervals[0],
});

import { sub, format, isSameDay, type Duration } from "date-fns";

const ranges = [
  { label: "Last 7 days", duration: { days: 7 } },
  { label: "Last 14 days", duration: { days: 14 } },
  { label: "Last 30 days", duration: { days: 30 } },
  { label: "Last 3 months", duration: { months: 3 } },
  { label: "Last 6 months", duration: { months: 6 } },
  { label: "Last year", duration: { years: 1 } },
];
const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() });
const selected2 = ref();
const selected3 = ref();

function isRangeSelected(duration: Duration) {
  return (
    isSameDay(selected.value.start, sub(new Date(), duration)) &&
    isSameDay(selected.value.end, new Date())
  );
}

function selectRange(duration: Duration) {
  selected.value = { start: sub(new Date(), duration), end: new Date() };
}
</script>

<template>
  <div class="sticky bottom-0 z-50 bg-white px-4 border-t-2">
    <template v-if="isOpen">
      <div class="bg-gray-50/40 border-b-2 -mx-4 px-4 py-2">
        <div class="flex items-center gap-2">
          <UButtonGroup size="sm" orientation="horizontal" class="basis-3/4">
            <UInput
              v-model="search"
              icon="i-heroicons-magnifying-glass-solid"
              placeholder="search ..."
              type="search"
              class="w-full"
            />
            <UButton color="gray" label="Search" />
            <UButton color="gray" icon="i-heroicons-document-arrow-up-solid" />
          </UButtonGroup>

          <!-- Space -->
          <span class="ml-auto"></span>

          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton
              variant="soft"
              icon="i-heroicons-ellipsis-vertical-solid"
            />
          </UDropdown>
        </div>

        <div class="flex items-center gap-4 mt-2">
          <UButtonGroup size="sm" orientation="horizontal">
            <UButton icon="i-heroicons-clock-solid" color="gray" />
            <USelectMenu v-model="state.time" :options="times" />
          </UButtonGroup>

          <UButtonGroup size="sm" orientation="horizontal">
            <UButton color="gray" label="Start" />
            <UInput v-model="state.from" type="datetime-local" />
          </UButtonGroup>

          <UButtonGroup size="sm" orientation="horizontal">
            <UButton color="gray" label="End" />
            <UInput v-model="state.to" type="datetime-local" />
          </UButtonGroup>

          <UButtonGroup size="sm" orientation="horizontal">
            <UButton color="gray" icon="i-heroicons-calendar-days-20-solid" />
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton size="sm" variant="ghost" color="gray" class="border">
                {{ format(selected.start, "d MMM, yyy") }} -
                {{ format(selected.end, "d MMM, yyy") }}
              </UButton>

              <template #panel="{ close }">
                <div
                  class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800"
                >
                  <div class="hidden sm:flex flex-col py-4">
                    <UButton
                      v-for="(range, index) in ranges"
                      :key="index"
                      :label="range.label"
                      color="gray"
                      variant="ghost"
                      class="rounded-none px-6"
                      :class="[
                        isRangeSelected(range.duration)
                          ? 'bg-gray-100 dark:bg-gray-800'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
                      ]"
                      truncate
                      @click="selectRange(range.duration)"
                    />
                  </div>

                  <DatePicker v-model="selected" @close="close" />
                </div>
              </template>
            </UPopover>
          </UButtonGroup>

          <UButtonGroup size="sm" orientation="horizontal">
            <UButton color="gray" label="Boundary" />
            <USelectMenu v-model="state.bounding" :options="boundings" />
          </UButtonGroup>

          <UButtonGroup size="sm" orientation="horizontal">
            <UButton color="gray" label="Interval" />
            <USelectMenu v-model="state.interval" :options="intervals" />
          </UButtonGroup>
        </div>
      </div>
    </template>

    <div class="flex items-center">
      <UHorizontalNavigation
        :links="links"
        :ui="{
          wrapper: 'w-max mx-auto',
          after: 'after:top-0 after:mt-0',
        }"
      />
      <UButton
        variant="solid"
        icon="i-heroicons-chevron-up-solid"
        @click="isOpen = !isOpen"
      />
    </div>

    <USlideover v-model="modalIsOpen" side="bottom">
      <div class="flex items-center justify-between p-4">
        <h2 class="font-bold">Other actions</h2>

        <UButton
          size="sm"
          color="gray"
          icon="i-heroicons-x-mark-20-solid"
          square
          padded
          @click="modalIsOpen = false"
        />
      </div>

      <div class="p-4">
        <div class="grid grid-cols-5 gap-4">
          <UFormGroup label="View Name">
            <UInput />
          </UFormGroup>
          <UFormGroup label="Expression">
            <UInput />
          </UFormGroup>
          <UFormGroup label="Users">
            <UInput />
          </UFormGroup>
          <UFormGroup label="Users">
            <USelectMenu
              v-model="selected2"
              :options="[
                'Wade Cooper',
                'Arlene Mccoy',
                'Devon Webb',
                'Tom Cook',
                'Tanya Fox',
                'Hellen Schmidt',
                'Caroline Schultz',
                'Mason Heaney',
                'Claudie Smitham',
                'Emil Schaefer',
              ]"
            />
          </UFormGroup>

          <div class="flex items-end">
            <UCheckbox
              v-model="selected3"
              name="notifications"
              label="Save Columns"
            />
          </div>

          <div class="flex items-end">
            <UButton size="md" label="Create new view" />
          </div>
        </div>
      </div>
    </USlideover>
  </div>
</template>
