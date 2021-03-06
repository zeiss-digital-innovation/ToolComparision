//COMMON
export enum appState {
  start,
  criteria,
  criteriumCreation,
  tools,
  toolCreation,
  compare,
  export,
}

export enum simpleModuleState {
  minimized,
  maximized,
  increation,
}

export enum simpleEditMode {
  Add,
  Update,
  UpdateSingle,
}

export function convertStringToEditModeEnum(convert: string): simpleEditMode {
  convert = convert.replaceAll(" ", "");
  convert = convert.toLowerCase();

  switch (convert) {
    case "update":
      return simpleEditMode.Update;
    case "updatesingle":
      return simpleEditMode.UpdateSingle;
    default:
      return simpleEditMode.Add;
  }
}
export function convertEditModeEnumToString(convert: simpleEditMode): string {
  switch (convert) {
    case simpleEditMode.Update:
      return "Update";
    case simpleEditMode.UpdateSingle:
      return "Update";
    default:
      return "Add";
  }
}

//CRITERIA
export enum criteriumImportance {
  undefined = 0,
  unimportant = 1,
  neutral = 2,
  important = 3,
  veryimportant = 4,
}

export function convertStringToImportanceEnum(
  convert: string
): criteriumImportance {
  convert = convert.replaceAll(" ", "");
  convert = convert.toLowerCase();

  switch (convert) {
    case "veryimportant":
      return criteriumImportance.veryimportant;
    case "important":
      return criteriumImportance.important;
    case "neutral":
      return criteriumImportance.neutral;
    case "unimportant":
      return criteriumImportance.unimportant;
    default:
      return criteriumImportance.undefined;
  }
}
export function convertImportanceEnumToString(
  convert: criteriumImportance
): string {
  switch (convert) {
    case criteriumImportance.veryimportant:
      return "very important";
    case criteriumImportance.important:
      return "important";
    case criteriumImportance.neutral:
      return "neutral";
    case criteriumImportance.unimportant:
      return "unimportant";
    default:
      return "";
  }
}

export interface criterium {
  name: string;
  description: string;
  importance: criteriumImportance;
  isExclusionCriterium: boolean;
}

export interface criteriumKeyValue {
  key: string;
  value: criterium;
}

export function isCriteriumKV(check: any): boolean {
  const type = check as criteriumKeyValue;

  return (
    type.key !== undefined &&
    type.value !== undefined &&
    type.value.importance !== undefined &&
    type.value.isExclusionCriterium !== undefined &&
    type.value.description !== undefined &&
    type.value.name !== undefined
  );
}

export function convertStringToModuleStateEnum(
  convert: string
): simpleModuleState {
  switch (convert) {
    case "minimized":
      return simpleModuleState.minimized;
    case "maximized":
      return simpleModuleState.maximized;
    default:
      return simpleModuleState.increation;
  }
}

//TOOLS
export enum toolCriteriumFullfillment {
  undefined = -1,
  doesnot = 0,
  verybad = 1,
  bad = 2,
  normal = 3,
  good = 4,
  verygood = 5,
}

export function convertStringToFullfillmentEnum(
  convert: string
): toolCriteriumFullfillment {
  convert = convert.replaceAll(" ", "");
  convert = convert.toLowerCase();

  switch (convert) {
    case "verygood":
      return toolCriteriumFullfillment.verygood;
    case "good":
      return toolCriteriumFullfillment.good;
    case "normal":
      return toolCriteriumFullfillment.normal;
    case "bad":
      return toolCriteriumFullfillment.bad;
    case "verybad":
      return toolCriteriumFullfillment.verybad;
    case "doesnot":
      return toolCriteriumFullfillment.doesnot;
    default:
      return toolCriteriumFullfillment.undefined;
  }
}

export function convertFullfillmentEnumToString(
  convert: toolCriteriumFullfillment
): string {
  switch (convert) {
    case toolCriteriumFullfillment.verygood:
      return "very good";
    case toolCriteriumFullfillment.good:
      return "good";
    case toolCriteriumFullfillment.normal:
      return "normal";
    case toolCriteriumFullfillment.bad:
      return "bad";
    case toolCriteriumFullfillment.verybad:
      return "very bad";
    case toolCriteriumFullfillment.doesnot:
      return "does not";
    default:
      return "";
  }
}

export interface toolCriteriumSuitability {
  criteriumKV: criteriumKeyValue;
  fullfillment: toolCriteriumFullfillment;
  justification: string;
}

export interface tool {
  name: string;
  description: string;
  criteriaSuitabilities: Array<toolCriteriumSuitability>;
}

export interface toolKeyValue {
  key: string;
  value: tool;
}

export function isToolKV(check: any): boolean {
  const type = check as toolKeyValue;

  return (
    type.key !== undefined &&
    type.value !== undefined &&
    type.value.criteriaSuitabilities !== undefined &&
    type.value.description !== undefined &&
    type.value.name !== undefined
  );
}

export interface toolRating {
  toolKV: toolKeyValue;
  score: score;
  rank: number;
}

export interface score {
  currentValue: number;
  maxValue: number;
  isExcluded: boolean;
}

export interface toolKVSuitabilityItem {
  toolKV: toolKeyValue;
  suitability: toolCriteriumSuitability;
}

export interface ISortItem {
  key: string;
  value: {
    name: string;
  };
}

export function stringContains(value: string, searchFor: string): boolean {
  if (searchFor === "" || searchFor === undefined || searchFor === null) {
    return true;
  }

  const v = (value || "").toLowerCase();
  let v2 = searchFor;
  if (v2) {
    v2 = v2.toLowerCase();
  }
  return v.indexOf(v2) !== -1;
}
