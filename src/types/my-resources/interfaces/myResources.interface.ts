import {
  CommonEntityFields,
  RequestParams,
  Category,
  QuestionTypesEnum,
  Answer
} from '~/types'

export interface Categories extends CommonEntityFields {
  name: string
  author: string
}

export interface GetResourcesParams extends Partial<RequestParams> {
  title?: string
  fileName?: string
}

export interface UpdateResourceCategory {
  name: Categories['name']
  id: Categories['_id']
}

export interface GetResourcesCategoriesParams extends Partial<RequestParams> {
  name?: string
}

export interface Lesson extends CommonEntityFields {
  title: string
  text: string
  answers: Answer[]
  author: string
  type: QuestionTypesEnum
  category: Category | null
}
