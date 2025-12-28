import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundSelectObjectSchema as BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema as BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundCreateInputObjectSchema as BackgroundCreateInputObjectSchema } from './objects/BackgroundCreateInput.schema';
import { BackgroundUncheckedCreateInputObjectSchema as BackgroundUncheckedCreateInputObjectSchema } from './objects/BackgroundUncheckedCreateInput.schema';

export const BackgroundCreateOneSchema: z.ZodType<Prisma.BackgroundCreateArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), data: z.union([BackgroundCreateInputObjectSchema, BackgroundUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BackgroundCreateArgs>;

export const BackgroundCreateOneZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), data: z.union([BackgroundCreateInputObjectSchema, BackgroundUncheckedCreateInputObjectSchema]) }).strict();