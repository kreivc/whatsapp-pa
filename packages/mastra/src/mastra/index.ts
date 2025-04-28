import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherWorkflow } from "./workflows";
import {
	weatherAgent,
	whatsappPersonalAssistant,
	imageCaptionAgent,
} from "./agents";

export const mastra = new Mastra({
	workflows: { weatherWorkflow },
	agents: {
		whatsappPersonalAssistant,
		weatherAgent,
		imageCaptionAgent,
	},
	logger: createLogger({
		name: "Mastra",
		level: "info",
	}),
});
