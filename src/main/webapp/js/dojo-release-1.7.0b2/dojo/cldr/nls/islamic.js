require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define({ root:

//begin v1.x content
{
	"months-format-narrow": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	"quarters-standAlone-narrow": [
		"1",
		"2",
		"3",
		"4"
	],
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "EEE, y-M-d",
	"dateFormatItem-MMMEd": "E MMM d",
	"eraNarrow": [
		"AH"
	],
	"dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}",
	"dateFormat-long": "y MMMM d",
	"months-format-wide": [
		"Muharram",
		"Safar",
		"Rabiʻ I",
		"Rabiʻ II",
		"Jumada I",
		"Jumada II",
		"Rajab",
		"Shaʻban",
		"Ramadan",
		"Shawwal",
		"Dhuʻl-Qiʻdah",
		"Dhuʻl-Hijjah"
	],
	"dateTimeFormat-medium": "{1} {0}",
	"dateFormatItem-EEEd": "d EEE",
	"dayPeriods-format-wide-pm": "PM",
	"dateFormat-full": "EEEE, y MMMM dd",
	"dateFormatItem-Md": "M-d",
	"dayPeriods-format-abbr-am": "AM",
	"dateTimeFormats-appendItem-Second": "{0} ({2}: {1})",
	"dateFormatItem-yM": "y-M",
	"months-standAlone-wide": [
		"Muharram",
		"Safar",
		"Rabiʻ I",
		"Rabiʻ II",
		"Jumada I",
		"Jumada II",
		"Rajab",
		"Shaʻban",
		"Ramadan",
		"Shawwal",
		"Dhuʻl-Qiʻdah",
		"Dhuʻl-Hijjah"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"timeFormat-long": "HH:mm:ss z",
	"dateFormatItem-yMMM": "y MMM",
	"dateFormatItem-yQ": "y Q",
	"dateTimeFormats-appendItem-Era": "{0} {1}",
	"months-format-abbr": [
		"Muh.",
		"Saf.",
		"Rab. I",
		"Rab. II",
		"Jum. I",
		"Jum. II",
		"Raj.",
		"Sha.",
		"Ram.",
		"Shaw.",
		"Dhuʻl-Q.",
		"Dhuʻl-H."
	],
	"timeFormat-full": "HH:mm:ss zzzz",
	"dateTimeFormats-appendItem-Week": "{0} ({2}: {1})",
	"dateFormatItem-H": "HH",
	"months-standAlone-abbr": [
		"Muh.",
		"Saf.",
		"Rab. I",
		"Rab. II",
		"Jum. I",
		"Jum. II",
		"Raj.",
		"Sha.",
		"Ram.",
		"Shaw.",
		"Dhuʻl-Q.",
		"Dhuʻl-H."
	],
	"quarters-format-abbr": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"quarters-standAlone-wide": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
	],
	"timeFormat-medium": "HH:mm:ss",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"eraAbbr": [
		"AH"
	],
	"days-standAlone-abbr": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
	],
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"quarters-format-narrow": [
		"1",
		"2",
		"3",
		"4"
	],
	"dateFormatItem-h": "h a",
	"dateTimeFormat-long": "{1} {0}",
	"dayPeriods-format-narrow-am": "AM",
	"dateFormatItem-MMMd": "MMM d",
	"dateFormatItem-MEd": "E, M-d",
	"dateTimeFormat-full": "{1} {0}",
	"days-format-wide": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
	],
	"dateTimeFormats-appendItem-Day": "{0} ({2}: {1})",
	"dateFormatItem-y": "y",
	"months-standAlone-narrow": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	"dateFormatItem-hm": "h:mm a",
	"dateTimeFormats-appendItem-Year": "{0} {1}",
	"dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})",
	"dayPeriods-format-abbr-pm": "PM",
	"days-format-abbr": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
	],
	"eraNames": [
		"AH"
	],
	"days-format-narrow": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
	],
	"days-standAlone-narrow": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
	],
	"dateFormatItem-MMM": "LLL",
	"dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})",
	"dayPeriods-format-wide-am": "AM",
	"dateTimeFormats-appendItem-Month": "{0} ({2}: {1})",
	"dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
	"dateFormat-short": "yyyy-MM-dd",
	"dateFormatItem-yMMMEd": "EEE, y MMM d",
	"dateTimeFormats-appendItem-Timezone": "{0} {1}",
	"dateFormat-medium": "y MMM d",
	"dayPeriods-format-narrow-pm": "PM",
	"dateTimeFormat-short": "{1} {0}",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "h:mm:ss a"
}
//end v1.x content
,
	"ar": true,
	"da": true,
	"de": true,
	"en": true,
	"en-gb": true,
	"es": true,
	"fi": true,
	"fr": true,
	"he": true,
	"hu": true,
	"it": true,
	"nb": true,
	"nl": true,
	"pl": true,
	"pt": true,
	"pt-pt": true,
	"ru": true,
	"sv": true,
	"th": true,
	"tr": true,
	"zh": true,
	"zh-hant": true
});