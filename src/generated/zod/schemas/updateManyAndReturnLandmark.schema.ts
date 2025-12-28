import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkUpdateManyMutationInputObjectSchema as LandmarkUpdateManyMutationInputObjectSchema } from './objects/LandmarkUpdateManyMutationInput.schema';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';

export const LandmarkUpdateManyAndReturnSchema: z.ZodType<Prisma.LandmarkUpdateManyAndReturnArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), data: LandmarkUpdateManyMutationInputObjectSchema, where: LandmarkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkUpdateManyAndReturnArgs>;

export const LandmarkUpdateManyAndReturnZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), data: LandmarkUpdateManyMutationInputObjectSchema, where: LandmarkWhereInputObjectSchema.optional() }).strict();