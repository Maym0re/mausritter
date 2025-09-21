import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutImagesInputObjectSchema } from './HexMapCreateWithoutImagesInput.schema';
import { HexMapUncheckedCreateWithoutImagesInputObjectSchema } from './HexMapUncheckedCreateWithoutImagesInput.schema';
import { HexMapCreateOrConnectWithoutImagesInputObjectSchema } from './HexMapCreateOrConnectWithoutImagesInput.schema';
import { HexMapUpsertWithoutImagesInputObjectSchema } from './HexMapUpsertWithoutImagesInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './HexMapUpdateToOneWithWhereWithoutImagesInput.schema';
import { HexMapUpdateWithoutImagesInputObjectSchema } from './HexMapUpdateWithoutImagesInput.schema';
import { HexMapUncheckedUpdateWithoutImagesInputObjectSchema } from './HexMapUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => HexMapUpsertWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexMapUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => HexMapUpdateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const HexMapUpdateOneRequiredWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutImagesNestedInput>;
export const HexMapUpdateOneRequiredWithoutImagesNestedInputObjectZodSchema = makeSchema();
