import OpenAIService from "../configs/openai.js";
import { InputPrompt } from "../models/input-prompt.js";

export const promptController = async (req, res) => {
  const inputModel = new InputPrompt(req.body);
  try {
    const result = await OpenAIService.textCompletion({
      prompt: inputModel,
    });
    console.log(result);
    return res.status(200).json({
      success: true,
      data: result.choices[0].text,
    });
  } catch (error) {
    console.error("Error completing text:", error);
    return res.status(400).json({
      success: false,
      error: error.response ? error.response.data : "Something went wrong",
    });
  }
};
