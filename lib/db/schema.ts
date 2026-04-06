import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  uuid,
  primaryKey,
} from "drizzle-orm/pg-core"

export const profiles = pgTable("profiles", {
  id:             text("id").primaryKey(),            // GitHub user ID (string)
  username:       text("username").notNull().unique(),
  name:           text("name"),
  bio:            text("bio"),
  avatarUrl:      text("avatar_url"),
  githubUrl:      text("github_url"),
  website:        text("website"),
  componentCount: integer("component_count").notNull().default(0),
  createdAt:      timestamp("created_at").notNull().defaultNow(),
  updatedAt:      timestamp("updated_at").notNull().defaultNow(),
})

export const communityComponents = pgTable("community_components", {
  id:            uuid("id").primaryKey().defaultRandom(),
  authorId:      text("author_id").notNull().references(() => profiles.id),
  slug:          text("slug").notNull().unique(),
  title:         text("title").notNull(),
  description:   text("description").notNull(),
  category:      text("category").notNull(),
  tags:          text("tags").array().notNull().default([]),
  componentCode: text("component_code").notNull(),
  demoCode:      text("demo_code").notNull(),
  dependencies:  text("dependencies").array().notNull().default([]),
  status:        text("status").notNull().default("pending"), // pending | approved | rejected | featured | changes_requested
  copyCount:     integer("copy_count").notNull().default(0),
  saveCount:     integer("save_count").notNull().default(0),
  featured:      boolean("featured").notNull().default(false),
  approvedAt:    timestamp("approved_at"),
  createdAt:     timestamp("created_at").notNull().defaultNow(),
  updatedAt:     timestamp("updated_at").notNull().defaultNow(),
})

export const componentSaves = pgTable("component_saves", {
  userId:      text("user_id").notNull().references(() => profiles.id),
  componentId: uuid("component_id").notNull().references(() => communityComponents.id),
  createdAt:   timestamp("created_at").notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.componentId] })])

export const componentReviews = pgTable("component_reviews", {
  id:          uuid("id").primaryKey().defaultRandom(),
  componentId: uuid("component_id").notNull().references(() => communityComponents.id),
  reviewerId:  text("reviewer_id").notNull().references(() => profiles.id),
  status:      text("status").notNull(),
  feedback:    text("feedback"),
  createdAt:   timestamp("created_at").notNull().defaultNow(),
})

// Inferred types for use in the app
export type Profile             = typeof profiles.$inferSelect
export type CommunityComponent  = typeof communityComponents.$inferSelect
export type ComponentSave       = typeof componentSaves.$inferSelect
export type ComponentReview     = typeof componentReviews.$inferSelect
