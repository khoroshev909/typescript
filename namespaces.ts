/// <reference path="namespace-form.ts" />

namespace Form {
    class Form {
        public email: string
        private _type: FormType = 'inline'
        private _state: FormState = 'active'

        constructor(email: string) {
            this.email = email
        }

        public getInfo(): FormInfo {
            return {
                type: this._type,
                state: this._state
            }
        }
    }

    export const form = new Form('test@test.com')
}

console.log(Form.form)
