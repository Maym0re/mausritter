import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { CampaignUpdateManyWithoutGmNestedInputObjectSchema } from './CampaignUpdateManyWithoutGmNestedInput.schema';
import { CharacterUpdateManyWithoutPlayerNestedInputObjectSchema } from './CharacterUpdateManyWithoutPlayerNestedInput.schema';
import { CampaignPlayerUpdateManyWithoutUserNestedInputObjectSchema } from './CampaignPlayerUpdateManyWithoutUserNestedInput.schema';
import { DiceRollLogUpdateManyWithoutUserNestedInputObjectSchema } from './DiceRollLogUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignUpdateManyWithoutGmNestedInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUpdateManyWithoutPlayerNestedInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutAccountsInput>;
export const UserUpdateWithoutAccountsInputObjectZodSchema = makeSchema();
