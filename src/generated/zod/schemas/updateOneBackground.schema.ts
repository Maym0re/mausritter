import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundSelectObjectSchema as BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema as BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundUpdateInputObjectSchema as BackgroundUpdateInputObjectSchema } from './objects/BackgroundUpdateInput.schema';
import { BackgroundUncheckedUpdateInputObjectSchema as BackgroundUncheckedUpdateInputObjectSchema } from './objects/BackgroundUncheckedUpdateInput.schema';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';

export const BackgroundUpdateOneSchema: z.ZodType<Prisma.BackgroundUpdateArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), data: z.union([BackgroundUpdateInputObjectSchema, BackgroundUncheckedUpdateInputObjectSchema]), where: BackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BackgroundUpdateArgs>;

export const BackgroundUpdateOneZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), data: z.union([BackgroundUpdateInputObjectSchema, BackgroundUncheckedUpdateInputObjectSchema]), where: BackgroundWhereUniqueInputObjectSchema }).strict();