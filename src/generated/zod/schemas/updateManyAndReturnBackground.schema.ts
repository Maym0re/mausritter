import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundSelectObjectSchema as BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundUpdateManyMutationInputObjectSchema as BackgroundUpdateManyMutationInputObjectSchema } from './objects/BackgroundUpdateManyMutationInput.schema';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';

export const BackgroundUpdateManyAndReturnSchema: z.ZodType<Prisma.BackgroundUpdateManyAndReturnArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), data: BackgroundUpdateManyMutationInputObjectSchema, where: BackgroundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundUpdateManyAndReturnArgs>;

export const BackgroundUpdateManyAndReturnZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), data: BackgroundUpdateManyMutationInputObjectSchema, where: BackgroundWhereInputObjectSchema.optional() }).strict();