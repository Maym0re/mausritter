import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutCharactersInputObjectSchema } from './CampaignCreateWithoutCharactersInput.schema';
import { CampaignUncheckedCreateWithoutCharactersInputObjectSchema } from './CampaignUncheckedCreateWithoutCharactersInput.schema';
import { CampaignCreateOrConnectWithoutCharactersInputObjectSchema } from './CampaignCreateOrConnectWithoutCharactersInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutCharactersInput>;
export const CampaignCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
