const sellhehe = !GlobalVars.getBoolean("AutoSell");
GlobalVars.putBoolean("AutoSell", sellhehe);
if (sellhehe) {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
        .append("Auto Sell").withColor(0x5)
        .append("]").withColor(0x7).append(" On").withColor(0x2)
        .build());
} else {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
    .append("Auto Sell").withColor(0x5)
    .append("]").withColor(0x7).append(" Off").withColor(0xc)
    .build());
} 

while (GlobalVars.getBoolean("AutoSell")) {
    const inv = Player.openInventory();
    const invname = inv.getContainerTitle().toString();
    const start = Date.now();

    const itemsToSell = [
        "minecraft:pumpkin",
        "minecraft:sea_pickle",
        "minecraft:rotten_flesh",
        "minecraft:bone_meal",
        "minecraft:arrow"
    ];

    function sellItem(inv, startIndex, endIndex, items) {
        for (let i = startIndex; i < endIndex; i++) {
            const item = inv.getSlot(i).getItemId();
            if (items.includes(item)) {
                inv.quickAll(i);
            }
        }
    }

    if (invname.includes("Chest")) {
        for (;;) { 
            sellItem(inv, 0, 53, itemsToSell);
            inv.close();
            Chat.log(Chat.createTextBuilder().append(`Chest Took: ${Date.now() - start} ms`).withColor(0x4).build());
            Chat.say("/sell");
            break;
        }
    } else if (invname.includes("ᴘʟᴀᴄᴇ ɪᴛᴇᴍѕ ɪɴ ʜᴇʀᴇ ᴛᴏ ѕᴇʟʟ")) {
        for (;;) {
            sellItem(inv, 45, 81, itemsToSell);
            inv.close();
            Chat.log(Chat.createTextBuilder().append("Auto Sell Made By Fembexx").withColor(0x6).build());
            Chat.log(Chat.createTextBuilder().append(`Sell Took: ${Date.now() - start} ms`).withColor(0x4).build());
            break;
        }
    }
    Client.waitTick(1)
}