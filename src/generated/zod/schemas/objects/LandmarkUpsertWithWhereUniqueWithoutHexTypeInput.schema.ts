import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateWithoutHexTypeInputObjectSchema as LandmarkUpdateWithoutHexTypeInputObjectSchema } from './LandmarkUpdateWithoutHexTypeInput.schema';
import { LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema as LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexTypeInput.schema';
import { LandmarkCreateWithoutHexTypeInputObjectSchema as LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema as LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LandmarkUpdateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema)])
}).strict();
export const LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUpsertWithWhereUniqueWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpsertWithWhereUniqueWithoutHexTypeInput>;
export const LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectZodSchema = makeSchema();
