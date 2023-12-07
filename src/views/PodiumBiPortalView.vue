<template>

  <h1>PodiumBiPortalView</h1>
  <div class="d-flex flex-wrap justify-center gap-3 mx-auto px-3 max-w-2xl">

    <form
        @submit.prevent="onSetCourse"
        class="w-full max-w-[750px]"
    >
      <v-text-field
          label="Title"
          :error-messages="v$.title.$errors.map(e => e.$message)"
          @input="v$.title.$touch"
          @blur="v$.title.$touch"
          required
      ></v-text-field>
      <v-text-field
          label="Slug"
          :error-messages="v$.slug.$errors.map(e => e.$message)"
          @input="v$.slug.$touch"
          @blur="v$.slug.$touch"
          required
      ></v-text-field>
      <v-text-field
          label="Id"
          :error-messages="v$.id.$errors.map(e => e.$message)"
          @input="v$.id.$touch"
          @blur="v$.id.$touch"
          type="number"
          value="240"
          required
          disabled
      ></v-text-field>
      <v-file-input
          label="FileInput"
          :error-messages="v$.fileInput.$errors.map(e => e.$message)"
          @input="v$.fileInput.$touch"
          @blur="v$.fileInput.$touch"
          required
      ></v-file-input>
      <v-textarea
          label="callToActionBox"
          :error-messages="v$.callToActionBox.$errors.map(e => e.$message)"
          @input="v$.callToActionBox.$touch"
          @blur="v$.callToActionBox.$touch"
          required
      ></v-textarea>
      <v-textarea
          label="Summary"
          :error-messages="v$.summary.$errors.map(e => e.$message)"
          @input="v$.summary.$touch"
          @blur="v$.summary.$touch"
          required
      ></v-textarea>
      <v-textarea
          label="Course Description"
          :error-messages="v$.courseDescription.$errors.map(e => e.$message)"
          @input="v$.courseDescription.$touch"
          @blur="v$.courseDescription.$touch"
          required
      ></v-textarea>
      <v-textarea
          label="Objectives"
          :error-messages="v$.objectives.$errors.map(e => e.$message)"
          @input="v$.objectives.$touch"
          @blur="v$.objectives.$touch"
          required
      ></v-textarea>
      <v-text-field
          label="Video"
          :error-messages="v$.video.$errors.map(e => e.$message)"
          @input="v$.video.$touch"
          @blur="v$.video.$touch"
          required
      ></v-text-field>
      <v-select
          label="Select language"
          :items="languageItems"
          :error-messages="v$.language.$errors.map(e => e.$message)"
          @input="v$.language.$touch"
          @blur="v$.language.$touch"
      ></v-select>
      <v-select
          label="Select author"
          :items="authorItems"
          :error-messages="v$.author.$errors.map(e => e.$message)"
          @input="v$.author.$touch"
          @blur="v$.author.$touch"
      ></v-select>

      <v-combobox
          label="Regulation Agencies"
          :items="agenciesItems"
          :error-messages="v$.agencies.$errors.map(e => e.$message)"
          @input="v$.agencies.$touch"
          @blur="v$.agencies.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
      ></v-combobox>
      <v-combobox
          label="Other Training Options"
          :items="otherItems"
          :error-messages="v$.other.$errors.map(e => e.$message)"
          @input="v$.other.$touch"
          @blur="v$.other.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
          disabled
      ></v-combobox>
      <!-- no-data-text="$vuetify.noDataText" -->

      <v-combobox
          label="Select Feature "
          :items="featureItems"
          :error-messages="v$.feature.$errors.map(e => e.$message)"
          @input="v$.feature.$touch"
          @blur="v$.feature.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
      ></v-combobox>

      <v-combobox
          label="Course Topics"
          :items="topicsItems"
          :error-messages="v$.topics.$errors.map(e => e.$message)"
          @input="v$.topics.$touch"
          @blur="v$.topics.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
      ></v-combobox>

      <v-combobox
          label="Select Subtitles"
          :items="subtitlesItems"
          :error-messages="v$.subtitles.$errors.map(e => e.$message)"
          @input="v$.subtitles.$touch"
          @blur="v$.subtitles.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
          disabled
      ></v-combobox>

      <v-combobox
          label="State"
          :items="stateItems"
          :error-messages="v$.state.$errors.map(e => e.$message)"
          @input="v$.state.$touch"
          @blur="v$.state.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
          disabled
      ></v-combobox>

      <v-combobox
          label="Tags"
          :items="tagsItems"
          :error-messages="v$.tags.$errors.map(e => e.$message)"
          @input="v$.tags.$touch"
          @blur="v$.tags.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
          disabled
      ></v-combobox>
      <v-text-field
          label="Meta Title"
          :error-messages="v$.metaTitle.$errors.map(e => e.$message)"
          @input="v$.metaTitle.$touch"
          @blur="v$.metaTitle.$touch"
          required
      ></v-text-field>

      <v-text-field
          label="Meta Description"
          :error-messages="v$.metaDescription.$errors.map(e => e.$message)"
          @input="v$.metaDescription.$touch"
          @blur="v$.metaDescription.$touch"
          required
      ></v-text-field>
      <v-file-input
          label="Select SEO image"
          :error-messages="v$.seoImage.$errors.map(e => e.$message)"
          @input="v$.seoImage.$touch"
          @blur="v$.seoImage.$touch"
          required
      ></v-file-input>
      <v-combobox
          label="Search Phrases & Words "
          :items="['',]"
          :error-messages="v$.searchPrasesAndWords.$errors.map(e => e.$message)"
          @input="v$.searchPrasesAndWords.$touch"
          @blur="v$.searchPrasesAndWords.$touch"
          chips
          multiple
          hide-selected
          filter-keys
          closable-chips
      ></v-combobox>

      <!--      <v-select
                v-model="state.select"
                :items="items"
                :error-messages="v$.select.$errors.map(e => e.$message)"
                label="Item"
                required
                @change="v$.select.$touch"
                @blur="v$.select.$touch"
            ></v-select>-->



      <v-btn
          class="me-4"
          type="submit"
          @click="v$.$validate"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>

<!--    <div class="d-flex flex-col gap-4 w-full">
      <h2 class="text-xl-h1">{{comboValue}}</h2>
      <v-text-field label="Label" variant="outlined" type="input"></v-text-field>
      <v-text-field label="email" variant="outlined" type="email"></v-text-field>
      <v-text-field label="password" variant="outlined" type="password" error error-messages="my error"></v-text-field>
      <combobox-validate :items="comboItems" v-model="comboValue" syncVModel></combobox-validate>
    </div>-->
  </div>

</template>

<script setup>
/*import ComboboxValidate from "@/components/ui/ComboboxValidate.vue";
import {ref} from 'vue';*/
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import apiRouter from "@/api/apiRouter";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";

/*const comboValue = ref('Texas')
const comboItems = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']*/
const languageItems = ['English'];
const authorItems = ['Andrew Easler, Esq.','Andrew Easler, Esq.','Andrew Easler, Esq.',];
const agenciesItems = ["DER COURSES",
                       "DOT COURSES",
                       "EMPLOYEE & SUPERVISOR TRAINING",
                       "WORKPLACE TESTING LAWS",
                       "DRUG-FREE WORKPLACE",
                       "ALCOHOL TESTING",
                       "TRAIN-THE-TRAINER",
                       "REASONABLE SUSPICION",
                      ];
const otherItems = [];
const subtitlesItems = [];

const featureItems = [
                     "DOT Compliant",
                     "Created by Attorneys",
                     "Live Customer Support",
                     "Learn Anytime & Anywhere",
                     "Credits Never Expire",
                     "Instant Course Access",
                     "2 Hours of Learning",
                     "Downloadable Certificate",
                     "Instant Manager Accounts",
                     "Volume Discounts",
                     "Approved for CE Credits",
                    ];

const topicsItems = [
                    "FMCSA",
                    "DOT",
                    "PHMSA",
                    "FAA",
                    "USCG",
                    "FRA",
                    "OSHA",
                    "FTA",
                    ];

const stateItems = [
                    "Alabama",
                    "Alaska",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "Florida",
                    "Georgia",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico",
                    "New York",
                    "North Carolina",
                    "North Dakota",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Pennsylvania",
                    "Rhode Island",
                    "South Carolina",
                    "South Dakota",
                    "Tennessee",
                    "Texas",
                    "Utah",
                    "Vermont",
                    "Virginia",
                    "Washington",
                    "West Virginia",
                    "Wisconsin",
                    "Wyoming",
                   ]

const tagsItems = [];

const {handler, loading, error} = useHandleLoadingAndError()

const initialState = {
    title: "string",
    meta_title: "string",
    meta_description: "text",
    slug: "se11d-excepturi-molestiae-labore-dolor-inventore",
    info: "text",
    description: "string",
    objective: "string",
    subtitles: ["sub1", "sub2"],
    seo_keywords: "seo1,seo2",
    max_discount: 5,
    min_credit_price:100,
    author_id: 1,
    tags: "string",
    video: "string",
    category_ids:[2,3],
    language:1,
    state_ids:[1],
    agency_ids:[],
    option_ids:[1],
    feature_ids:[],
    question_category_ids:[],
    subtitle_ids:[],
    is_certificate_required: true,
    can_be_reenrolled: true,
    due_dates: 10,
    expired_on: 160,
    available_on:50,
    allow_shipping:true,
}


const state = reactive({
  ...initialState,
})

/*
const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]
*/

const rules = {
  title: { required },
  slug: {required},
  id: {required},
  fileInput: {required},
  callToActionBox: {required},
  summary: {required},
  courseDescription: {required},
  objectives: {required},
  video: {required},
  language: {required},
  author: {required},
  agencies: {required},
  other: {required},
  feature: {required},
  topics: {required},
  subtitles: {required},
  state: {required},
  tags: {required},
  metaTitle: {required},
  metaDescription: {required},
  seoImage: {required},
  searchPrasesAndWords: {required},

}

const v$ = useVuelidate(rules, state)





const onSetCourse = async () => {
  console.log(240, state)
  await handler(apiRouter.admin.courses.update( 240, state));
};


function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
</script>

<style scoped>

</style>