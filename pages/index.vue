<script lang="ts" setup>
const items = [
  {
    label: "1-Visualization",
    defaultOpen: true,
    slot: "slot-1",
  },
  {
    label: "2-Table",
    defaultOpen: true,
    slot: "slot-2",
  },
];

const option = ref({
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: [
      "2016/10/16 11:49:01",
      "2016/10/16 11:49:01",
      "2016/10/16 11:48:49",
      "2016/10/16 11:49:01",
      "2016/10/16 11:49:01",
      "2016/10/16 11:48:49",
      "2016/10/16 11:49:01",
      "2016/10/16 11:49:01",
      "2016/10/16 11:48:49",
      "2016/10/16 11:49:01",
      "2016/10/16 11:49:01",
      "2016/10/16 11:48:49",
    ],
  },
  yAxis: { type: "value" },
  series: [
    { type: "bar", data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30] },
  ],
});

const chartOptions = ref({
  tooltip: {},
  series: [
    {
      type: "graph",
      layout: "force",
      data: [
        { name: "Node 1", value: 10 },
        { name: "Node 2", value: 20 },
        { name: "Node 3", value: 30 },
        { name: "Node 4", value: 40 },
        { name: "Node 5", value: 50 },
      ],
      links: [
        { source: 0, target: 1 },
        { source: 1, target: 2 },
        { source: 2, target: 3 },
        { source: 3, target: 4 },
        { source: 4, target: 5 },
      ],
      roam: true,
    },
  ],
});

const columns = [
  {
    key: "srcport",
    label: "Src Port",
    sortable: true,
  },
  {
    key: "srcip",
    label: "Src IP / Country",
    sortable: true,
  },
  {
    key: "dstip",
    label: "Dst IP / Country",
    sortable: true,
  },
  {
    key: "dstport",
    label: "Dst Port",
    sortable: true,
  },
  {
    key: "bytes",
    label: "Databytes / Bytes",
    sortable: true,
  },
  {
    key: "host",
    label: "Host",
    sortable: true,
  },
  {
    key: "uri",
    label: "URI",
    sortable: true,
  },
  {
    key: "sourcenode",
    label: "Arkime Source Node",
    sortable: true,
  },
  {
    key: "arkimenode",
    label: "Arkime Node",
    sortable: true,
  },
  {
    key: "ja4",
    label: "JA4",
    sortable: true,
  },
  {
    key: "aa",
    label: "Arkime Source Node",
    sortable: true,
  },
  {
    key: "bb",
    label: "Arkime Node",
    sortable: true,
  },
  {
    key: "cc",
    label: "JA4",
    sortable: true,
  },
  {
    key: "dd",
    label: "Arkime Source Node",
    sortable: true,
  },
  {
    key: "ff",
    label: "Arkime Node",
    sortable: true,
  },
  {
    key: "jj",
    label: "JA4",
    sortable: true,
  },
];

const people = [
  {
    srcport: 0,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "120",
    bytes: "2320",
    host: "",
    uri: "",
    sourcenode: 12,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 1,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "3230",
    bytes: "220",
    host: "",
    uri: "",
    sourcenode: 340,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 2,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 3,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 4,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 5,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 6,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 7,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 8,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
  {
    srcport: 9,
    srcip: "192.168.1.110",
    dstip: "192.168.1.1",
    dstport: "0",
    bytes: "20",
    host: "",
    uri: "",
    sourcenode: 0,
    arkimenode: "192.168.1.110",
    ja4: "192.168.1.1",
    aa: "a test data for tabel",
    bb: "a test data for tabel",
    cc: "a test data for tabel",
    dd: "a test data for tabel",
    ff: "a test data for tabel",
    jj: "a test data for tabel",
  },
];

const expand = ref({
  openedRows: [],
  row: {},
});
</script>

<template>
  <UAccordion size="xl" multiple :items="items">
    <template #slot-1>
      <div class="flex gap-4 border rounded-lg mb-4">
        <VChart :option="option" style="height: 300px" />
        <VChart :option="chartOptions" style="height: 300px" />
      </div>
    </template>

    <template #slot-2>
      <div class="space-y-3">
        <UPagination
          size="sm"
          :model-value="1"
          :total="100"
          show-last
          show-first
          class="w-max mx-auto"
        />

        <UTable
          class="w-full border rounded-lg"
          v-model:expand="expand"
          :rows="people"
          :columns="columns"
          :ui="{ thead: 'sticky top-0', th: { base: 'whitespace-nowrap' } }"
        >
          <template #expand="{ row }">
            <div class="p-4">
              <pre>{{ row }}</pre>
            </div>
          </template>
        </UTable>
      </div>
    </template>
  </UAccordion>
</template>
