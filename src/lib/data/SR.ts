// @ts-nocheck
export class SR {
    instance
    hearedWords: string[] = []
    init() {
        const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
        this.instance = new SpeechRecognition()
        if (this.instance) {
                this.instance.lang = 'en-US'
                this.instance.continuous = true
                this.instance.interimResults = true
                this.instance.maxAlternatives = 1
                this.instance.onresult = event => this.listen(event)
                this.instance.onstop = () => this.instance.start()
            }
        }
    listen(event) {
        let result = event.results
        let index = result.length - 1
        this.hearedWords.push(result[index][0].transcript.trim().toLowerCase())
    }
}