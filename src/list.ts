export type List = {
  [key: string]: Array<{
    title: string;
    checked: boolean;
  }>;
};
export const list: List = {
  miegas: [
    { title: "miegmaisis", checked: false },
    { title: "palapine", checked: false },
    { title: "virvute", checked: false },
    { title: "kilimelis", checked: false },
    { title: "kuoliukai", checked: false },
    { title: "hamakas/hamakai", checked: false },
    { title: "kedes", checked: false },
  ],

  daiktai: [
    { title: "hermetmaisiai", checked: false },
    { title: "prozektorius", checked: false },
    { title: "power bankas", checked: false },
    { title: "peilis", checked: false },
    { title: "siuksliu maisai", checked: false },
    { title: "purskalas nuo uodu", checked: false },
    { title: "akiniai nuo saules", checked: false },
    { title: "kremas nuo saules", checked: false },
    { title: "degtukai", checked: false },
    { title: "baterijos prozektoriui", checked: false },
  ],

  higiena: [
    { title: "tualetinis popierius", checked: false },
    { title: "muilas", checked: false },
    { title: "sampunas", checked: false },
    { title: "ranksluostis", checked: false },
    { title: "dantu sepetukas/pasta", checked: false },
    { title: "dezodorantas", checked: false },
  ],

  vaistinele: [
    { title: "pincetas", checked: false },
    { title: "ibumetinas", checked: false },
    { title: "pleistras", checked: false },
    { title: "slapios serveteles", checked: false },
  ],

  rubai: [
    { title: "maudimukas", checked: false },
    { title: "kepure nuo saules", checked: false },
    { title: "sandalai", checked: false },
    { title: "kedai", checked: false },
    { title: "kelnes vakarui", checked: false },
    { title: "kelnes plaukimui", checked: false },
    { title: "sortai", checked: false },
    { title: "striuke nuo lietaus", checked: false },
    { title: "ponchas", checked: false },
    { title: "bandana", checked: false },
    { title: "maikutes ", checked: false },
    { title: "kojines", checked: false },
    { title: "apatiniai", checked: false },
    { title: "dzemperis vakarui", checked: false },
    { title: "dzemperis plaukimui", checked: false },
  ],

  valgymas: [
    { title: "sporkai", checked: false },
    { title: "fairy, kempinele", checked: false },
    { title: "dujos, puodai", checked: false },
    { title: "puodeliai", checked: false },
    { title: "tirpi kava", checked: false },
    { title: "lentele", checked: false },
    { title: "skustukas", checked: false },
    { title: "keptuve", checked: false },
    { title: "druska/pipirai", checked: false },
  ],

  maistas: [],
};
