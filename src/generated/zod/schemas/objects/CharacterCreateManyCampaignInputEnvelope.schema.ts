import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyCampaignInputObjectSchema } from './CharacterCreateManyCampaignInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CharacterCreateManyCampaignInputObjectSchema), z.lazy(() => CharacterCreateManyCampaignInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyCampaignInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyCampaignInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateManyCampaignInputEnvelope>;
export const CharacterCreateManyCampaignInputEnvelopeObjectZodSchema = makeSchema();
