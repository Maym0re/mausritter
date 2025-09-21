import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateWithoutHexTypeInputObjectSchema } from './LandmarkUpdateWithoutHexTypeInput.schema';
import { LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexTypeInput.schema';
import { LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LandmarkUpdateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema)])
}).strict();
export const LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUpsertWithWhereUniqueWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpsertWithWhereUniqueWithoutHexTypeInput>;
export const LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectZodSchema = makeSchema();
