import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema)])
}).strict();
export const LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexTypeInput>;
export const LandmarkCreateOrConnectWithoutHexTypeInputObjectZodSchema = makeSchema();
