import manIcon from '@icons/avatar_man.svg'
import womanIcon from '@icons/avatar_woman.svg'
import noGenderIcon from '@icons/avatar_no.svg'

export const GENDER = {
    MALE: 'male',
    FEMALE: 'female',
    UNKNOWN: 'unknown',
}

export const GENDER_ICONS = {
    [GENDER.MALE]: manIcon,
    [GENDER.FEMALE]: womanIcon,
    [GENDER.UNKNOWN]: noGenderIcon,
}

export const GENDER_LABELS = {
    [GENDER.MALE]: 'Мужской',
    [GENDER.FEMALE]: 'Женский',
    [GENDER.UNKNOWN]: 'Не указан',
}
