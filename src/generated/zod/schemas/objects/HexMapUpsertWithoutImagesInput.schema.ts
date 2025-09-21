import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapUpdateWithoutImagesInputObjectSchema } from './HexMapUpdateWithoutImagesInput.schema';
import { HexMapUncheckedUpdateWithoutImagesInputObjectSchema } from './HexMapUncheckedUpdateWithoutImagesInput.schema';
import { HexMapCreateWithoutImagesInputObjectSchema } from './HexMapCreateWithoutImagesInput.schema';
import { HexMapUncheckedCreateWithoutImagesInputObjectSchema } from './HexMapUncheckedCreateWithoutImagesInput.schema';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HexMapUpdateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => HexMapCreateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutImagesInputObjectSchema)]),
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional()
}).strict();
export const HexMapUpsertWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapUpsertWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpsertWithoutImagesInput>;
export const HexMapUpsertWithoutImagesInputObjectZodSchema = makeSchema();
