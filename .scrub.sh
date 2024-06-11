#!/bin/bash
# Scrubs the projec to sterilize it for a fresh start
#############################################################

GREEN='\033[0;32m' #green
YELLOW='\033[33m' #yellow
WHITE='\033[97m' #white
GRAY='\033[37m' #light gray
NC='\033[0m' #no-color

TITLE="🧼 Scrubbed"
OPTIONS="${YELLOW}site${NC}, or ${YELLOW}purge${NC}"
MALFUNCTION="👨‍🚀 Huston... We have a problem! Make sure you use ${OPTIONS} - "
PURGE="${GREEN}🧹 All Clean ✨${NC} ${FRESH}${NC} Run ${YELLOW}npm/yarn/pnpm/bun install${NC} to start fresh 🤩"
OOPS="🚀💥🔥 OOPS! We need a valid option – Try using ${OPTIONS}"
FRESH="${TITLE} ${WHITE}node_modules${NC}, ${WHITE}dist/${NC} or ${WHITE}_site/${NC}, ${WHITE}all caches${NC} & ${GRAY}lock files${NC}, ✨"
SITE="${TITLE} ${WHITE}dist/${NC} or ${WHITE}_site/${NC}, & ${WHITE}all cache${NC} directories ✨"

DEVFILES="dist/ _site/ .cache/ *.log"
NODEFILES="node_modules package-lock.json pnpm-lock.yaml yarn.lock .yarn/ bun.lockb"

#################### DONT EDIT BELOW  👀 ####################
if [ $# -eq 0 ]
  then
    echo -e "$MALFUNCTION"
elif [ "$1" == "site" ]
  then
    (rm -rf ${DEVFILES} || del ${DEVFILES})
    echo -e ${SITE}
  elif [ "$1" == "purge" ]
    then
      (rm -rf ${DEVFILES} ${NODEFILES} || del ${DEVFILES} ${NODEFILES})
      echo -e ${PURGE}
  else
    echo -e "$OOPS"
fi
