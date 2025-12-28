import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundSelectObjectSchema as BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema as BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';
import { BackgroundCreateInputObjectSchema as BackgroundCreateInputObjectSchema } from './objects/BackgroundCreateInput.schema';
import { BackgroundUncheckedCreateInputObjectSchema as BackgroundUncheckedCreateInputObjectSchema } from './objects/BackgroundUncheckedCreateInput.schema';
import { BackgroundUpdateInputObjectSchema as BackgroundUpdateInputObjectSchema } from './objects/BackgroundUpdateInput.schema';
import { BackgroundUncheckedUpdateInputObjectSchema as BackgroundUncheckedUpdateInputObjectSchema } from './objects/BackgroundUncheckedUpdateInput.schema';

export const BackgroundUpsertOneSchema: z.ZodType<Prisma.BackgroundUpsertArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema, create: z.union([ BackgroundCreateInputObjectSchema, BackgroundUncheckedCreateInputObjectSchema ]), update: z.union([ BackgroundUpdateInputObjectSchema, BackgroundUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BackgroundUpsertArgs>;

export const BackgroundUpsertOneZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema, create: z.union([ BackgroundCreateInputObjectSchema, BackgroundUncheckedCreateInputObjectSchema ]), update: z.union([ BackgroundUpdateInputObjectSchema, BackgroundUncheckedUpdateInputObjectSchema ]) }).strict();