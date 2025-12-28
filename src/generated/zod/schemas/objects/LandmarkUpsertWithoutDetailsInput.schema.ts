import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkUpdateWithoutDetailsInputObjectSchema as LandmarkUpdateWithoutDetailsInputObjectSchema } from './LandmarkUpdateWithoutDetailsInput.schema';
import { LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema as LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedUpdateWithoutDetailsInput.schema';
import { LandmarkCreateWithoutDetailsInputObjectSchema as LandmarkCreateWithoutDetailsInputObjectSchema } from './LandmarkCreateWithoutDetailsInput.schema';
import { LandmarkUncheckedCreateWithoutDetailsInputObjectSchema as LandmarkUncheckedCreateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedCreateWithoutDetailsInput.schema';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LandmarkUpdateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkCreateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutDetailsInputObjectSchema)]),
  where: z.lazy(() => LandmarkWhereInputObjectSchema).optional()
}).strict();
export const LandmarkUpsertWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkUpsertWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpsertWithoutDetailsInput>;
export const LandmarkUpsertWithoutDetailsInputObjectZodSchema = makeSchema();
