import { get_hand_total, type BlackjackPlayer } from "./blackjack_player";
import { Suit, Rank } from "../card";

export function blackjack(){

    const player: BlackjackPlayer = {
        money: 1000,
        hands: [
            [ { suit: Suit.Hearts, rank: Rank.Ten }, { suit: Suit.Spades, rank: Rank.Seven }, { suit: Suit.Diamonds, rank: Rank.Ace }],
            [ { suit: Suit.Diamonds, rank: Rank.Ace } ]
        ]
    };

    for(const hand of player.hands){
        console.log(get_hand_total(hand));
    }

}