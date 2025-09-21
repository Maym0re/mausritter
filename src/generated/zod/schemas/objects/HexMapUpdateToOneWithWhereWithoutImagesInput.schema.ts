import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexMapUpdateWithoutImagesInputObjectSchema } from './HexMapUpdateWithoutImagesInput.schema';
import { HexMapUncheckedUpdateWithoutImagesInputObjectSchema } from './HexMapUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexMapUpdateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutImagesInputObjectSchema)])
}).strict();
export const HexMapUpdateToOneWithWhereWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutImagesInput>;
export const HexMapUpdateToOneWithWhereWithoutImagesInputObjectZodSchema = makeSchema();
