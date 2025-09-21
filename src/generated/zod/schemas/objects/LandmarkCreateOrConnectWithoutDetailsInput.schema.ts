import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkCreateWithoutDetailsInputObjectSchema } from './LandmarkCreateWithoutDetailsInput.schema';
import { LandmarkUncheckedCreateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedCreateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkCreateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutDetailsInputObjectSchema)])
}).strict();
export const LandmarkCreateOrConnectWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkCreateOrConnectWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateOrConnectWithoutDetailsInput>;
export const LandmarkCreateOrConnectWithoutDetailsInputObjectZodSchema = makeSchema();
