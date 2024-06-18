import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeZeroOneAI = LobeOpenAICompatibleFactory({
  baseURL: 'https://oneapi.gisphere.info/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_ZEROONE_CHAT_COMPLETION === '1',
  },

  provider: ModelProvider.ZeroOne,
});
