import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutCharactersInputObjectSchema } from './CampaignCreateWithoutCharactersInput.schema';
import { CampaignUncheckedCreateWithoutCharactersInputObjectSchema } from './CampaignUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutCharactersInput>;
export const CampaignCreateOrConnectWithoutCharactersInputObjectZodSchema = makeSchema();
