import { ModelProviderCard } from '@/types/llm';

// ref https://platform.lingyiwanwu.com/docs#%E6%A8%A1%E5%9E%8B
const ZeroOne: ModelProviderCard = {
  chatModels: [
    {
      description: '全新千亿参数模型，提供超强问答及文本生成能力。',
      displayName: 'Yi Large',
      enabled: true,
      id: 'yi-large',
      tokens: 32_768,
    },
  ],
  checkModel: 'yi-large',
  id: 'zeroone',
  name: '01.AI',
};

export default ZeroOne;
