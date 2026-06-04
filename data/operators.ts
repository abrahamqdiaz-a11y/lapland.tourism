export type Operator = {
  name: string;
  description: string;
  url: string;
  utm: string;
};

export const operators: Record<string, Record<string, Operator>> = {
  "snow-safari": {
    "yllas": {
      name: "Ylläs Snowmobile Operator",
      description: "Guided snowmobile tours in and around Ylläs. Small groups, all gear included.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=snow-safari-yllas",
    },
    "levi": {
      name: "Levi Snowmobile Operator",
      description: "Guided snowmobile expeditions from Levi. Half and full-day options.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=snow-safari-levi",
    },
    "rovaniemi": {
      name: "Rovaniemi Snowmobile Operator",
      description: "Snowmobile safaris through the Arctic forests around Rovaniemi.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=snow-safari-rovaniemi",
    },
    "saariselka": {
      name: "Saariselkä Snowmobile Operator",
      description: "Remote wilderness snowmobile tours from Saariselkä.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=snow-safari-saariselka",
    },
  },
  "husky-safari": {
    "rovaniemi": {
      name: "Rovaniemi Husky Operator",
      description: "Husky safaris from Rovaniemi. Family-friendly, small groups.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=husky-rovaniemi",
    },
    "levi": {
      name: "Levi Husky Operator",
      description: "Husky farm and safari experiences based near Levi.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=husky-levi",
    },
    "yllas": {
      name: "Ylläs Husky Operator",
      description: "Husky safaris through the Ylläs wilderness. 1 to 3-hour options.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=husky-yllas",
    },
  },
  "aurora-hunting": {
    "saariselka": {
      name: "Saariselkä Aurora Operator",
      description: "Aurora hunting tours from Saariselkä — some of the darkest skies in Lapland.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=aurora-saariselka",
    },
    "yllas": {
      name: "Ylläs Aurora Operator",
      description: "Guided aurora tours away from light pollution in the Ylläs fells.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=aurora-yllas",
    },
    "rovaniemi": {
      name: "Rovaniemi Aurora Operator",
      description: "Northern lights tours from Rovaniemi with experienced local guides.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=aurora-rovaniemi",
    },
  },
  "reindeer-safari": {
    "rovaniemi": {
      name: "Rovaniemi Reindeer Operator",
      description: "Reindeer farm visits and sled rides from Rovaniemi.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=reindeer-rovaniemi",
    },
    "levi": {
      name: "Levi Reindeer Operator",
      description: "Reindeer experiences and forest sleigh rides near Levi.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=reindeer-levi",
    },
    "yllas": {
      name: "Ylläs Reindeer Operator",
      description: "Reindeer tours through the Ylläs wilderness.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=reindeer-yllas",
    },
  },
  "ice-fishing": {
    "yllas": {
      name: "Ylläs Ice Fishing Operator",
      description: "Guided ice fishing on frozen fell lakes. All gear and hot drinks included.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=ice-fishing-yllas",
    },
    "levi": {
      name: "Levi Ice Fishing Operator",
      description: "Ice fishing on Lake Levijärvi with local guides.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=ice-fishing-levi",
    },
    "saariselka": {
      name: "Saariselkä Ice Fishing Operator",
      description: "Remote lake ice fishing in the national park area.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=ice-fishing-saariselka",
    },
  },
  "skiing-snowboard": {
    "levi": {
      name: "Levi Ski Operator",
      description: "Lift passes, equipment hire and ski school at Levi.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=skiing-levi",
    },
    "yllas": {
      name: "Ylläs Ski Operator",
      description: "Finland's longest ski runs. Equipment hire and lessons available.",
      url: "https://operator-placeholder.com",
      utm: "?utm_source=laplandguide&utm_medium=referral&utm_campaign=skiing-yllas",
    },
  },
};
