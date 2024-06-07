import OpenAI from "openai";

export default class OpenAIService {
  static configuration() {
    const configuration = new OpenAI({
      apiKey: process.env.OPEN_AI_KEY,
    });
    return configuration;
  }

  static async textCompletion({ prompt }) {
    const configuration = this.configuration();
    const response = await configuration.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    return response.data;
  }
}
