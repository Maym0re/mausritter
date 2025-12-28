import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutImagesInputObjectSchema as HexMapCreateWithoutImagesInputObjectSchema } from './HexMapCreateWithoutImagesInput.schema';
import { HexMapUncheckedCreateWithoutImagesInputObjectSchema as HexMapUncheckedCreateWithoutImagesInputObjectSchema } from './HexMapUncheckedCreateWithoutImagesInput.schema';
import { HexMapCreateOrConnectWithoutImagesInputObjectSchema as HexMapCreateOrConnectWithoutImagesInputObjectSchema } from './HexMapCreateOrConnectWithoutImagesInput.schema';
import { HexMapUpsertWithoutImagesInputObjectSchema as HexMapUpsertWithoutImagesInputObjectSchema } from './HexMapUpsertWithoutImagesInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapUpdateToOneWithWhereWithoutImagesInputObjectSchema as HexMapUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './HexMapUpdateToOneWithWhereWithoutImagesInput.schema';
import { HexMapUpdateWithoutImagesInputObjectSchema as HexMapUpdateWithoutImagesInputObjectSchema } from './HexMapUpdateWithoutImagesInput.schema';
import { HexMapUncheckedUpdateWithoutImagesInputObjectSchema as HexMapUncheckedUpdateWithoutImagesInputObjectSchema } from './HexMapUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => HexMapUpsertWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexMapUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => HexMapUpdateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const HexMapUpdateOneRequiredWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutImagesNestedInput>;
export const HexMapUpdateOneRequiredWithoutImagesNestedInputObjectZodSchema = makeSchema();
