import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema';
import { LandmarkUpdateWithoutDetailsInputObjectSchema } from './LandmarkUpdateWithoutDetailsInput.schema';
import { LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedUpdateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LandmarkUpdateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema)])
}).strict();
export const LandmarkUpdateToOneWithWhereWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateToOneWithWhereWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateToOneWithWhereWithoutDetailsInput>;
export const LandmarkUpdateToOneWithWhereWithoutDetailsInputObjectZodSchema = makeSchema();
