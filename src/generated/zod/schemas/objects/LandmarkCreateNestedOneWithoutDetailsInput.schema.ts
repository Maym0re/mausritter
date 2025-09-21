import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutDetailsInputObjectSchema } from './LandmarkCreateWithoutDetailsInput.schema';
import { LandmarkUncheckedCreateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedCreateWithoutDetailsInput.schema';
import { LandmarkCreateOrConnectWithoutDetailsInputObjectSchema } from './LandmarkCreateOrConnectWithoutDetailsInput.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => LandmarkWhereUniqueInputObjectSchema).optional()
}).strict();
export const LandmarkCreateNestedOneWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkCreateNestedOneWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateNestedOneWithoutDetailsInput>;
export const LandmarkCreateNestedOneWithoutDetailsInputObjectZodSchema = makeSchema();
