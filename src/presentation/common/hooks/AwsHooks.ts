import React from "react";
import log from "../../../domain/utils/logger";

// setup a mock or production
export function useAws() {
  return {
    getFeed: (a: string, b: number) => [],
  };
}
