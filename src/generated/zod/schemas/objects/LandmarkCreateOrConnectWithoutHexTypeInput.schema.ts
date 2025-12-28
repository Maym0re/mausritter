import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkCreateWithoutHexTypeInputObjectSchema as LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema as LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema)])
}).strict();
export const LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexTypeInput>;
export const LandmarkCreateOrConnectWithoutHexTypeInputObjectZodSchema = makeSchema();
