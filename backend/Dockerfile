FROM node:20-alpine

# enable pnpm
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

WORKDIR /app

# copy only dependency files (for cache)
COPY package.json pnpm-lock.yaml ./

# install prod dependencies only
RUN pnpm install --prod=false

# copy prisma schema BEFORE generate
COPY prisma ./prisma

# generate prisma client
RUN pnpm prisma generate

# copy rest of the app
COPY . .

EXPOSE 4000

CMD ["node", "index.js"]