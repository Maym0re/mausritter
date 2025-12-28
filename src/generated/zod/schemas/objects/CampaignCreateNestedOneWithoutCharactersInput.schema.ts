import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutCharactersInputObjectSchema as CampaignCreateWithoutCharactersInputObjectSchema } from './CampaignCreateWithoutCharactersInput.schema';
import { CampaignUncheckedCreateWithoutCharactersInputObjectSchema as CampaignUncheckedCreateWithoutCharactersInputObjectSchema } from './CampaignUncheckedCreateWithoutCharactersInput.schema';
import { CampaignCreateOrConnectWithoutCharactersInputObjectSchema as CampaignCreateOrConnectWithoutCharactersInputObjectSchema } from './CampaignCreateOrConnectWithoutCharactersInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutCharactersInput>;
export const CampaignCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
