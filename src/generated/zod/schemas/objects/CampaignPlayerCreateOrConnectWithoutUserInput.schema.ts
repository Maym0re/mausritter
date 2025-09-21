import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCreateWithoutUserInputObjectSchema } from './CampaignPlayerCreateWithoutUserInput.schema';
import { CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateOrConnectWithoutUserInput>;
export const CampaignPlayerCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
