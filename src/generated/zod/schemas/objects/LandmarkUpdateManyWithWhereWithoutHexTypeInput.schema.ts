import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkScalarWhereInputObjectSchema } from './LandmarkScalarWhereInput.schema';
import { LandmarkUpdateManyMutationInputObjectSchema } from './LandmarkUpdateManyMutationInput.schema';
import { LandmarkUncheckedUpdateManyWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedUpdateManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LandmarkUpdateManyMutationInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateManyWithoutHexTypeInputObjectSchema)])
}).strict();
export const LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateManyWithWhereWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateManyWithWhereWithoutHexTypeInput>;
export const LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectZodSchema = makeSchema();
