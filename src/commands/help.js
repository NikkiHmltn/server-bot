module.exports = {
    name: "help",
    description: "Sends a list of commands to the user",
    execute(message, args) {
        message.channel.send("```##LIST OF LORE RELATED CALLS\n- !lore farmer kirari\n- !lore sandwich\n- !lore cokegurui\n- !lore hap\n- !lore sayakaviar\n- !lore kavirari\n- !lore papa igarashi\n- !lore stripperbami\n- !lore chunguslava\n- !lore tiny voice\n- !lore my immortal\n- !lore keycard\n- !lore gilf\n- !lore blub\n- !lore chair\n- !lore nikocado\n\n##OTHER COMMANDS\n- !help (calls for a list of commands)\n- !water (reminds people to drink their water)\n- !ping (pong!)```")
    }
}