import { GENDER, GENDER_ICONS, GENDER_LABELS } from '@constants/gender.js'

export const getGenderInfo = (gender) => {
    console.log(gender)

    if (!gender) {
        return {
            type: GENDER.UNKNOWN,
            icon: GENDER_ICONS[GENDER.UNKNOWN],
            label: GENDER_LABELS[GENDER.UNKNOWN],
        }
    }

    const normalizedGender = gender.toLowerCase()

    if (
        (!normalizedGender.includes('female') &&
            normalizedGender.includes('male')) ||
        normalizedGender.includes('муж')
    ) {
        return {
            type: GENDER.MALE,
            icon: GENDER_ICONS[GENDER.MALE],
            label: GENDER_LABELS[GENDER.MALE],
        }
    }

    if (
        normalizedGender.includes('female') ||
        normalizedGender.includes('жен')
    ) {
        return {
            type: GENDER.FEMALE,
            icon: GENDER_ICONS[GENDER.FEMALE],
            label: GENDER_LABELS[GENDER.FEMALE],
        }
    }

    return {
        type: GENDER.UNKNOWN,
        icon: GENDER_ICONS[GENDER.UNKNOWN],
        label: GENDER_LABELS[GENDER.UNKNOWN],
    }
}
