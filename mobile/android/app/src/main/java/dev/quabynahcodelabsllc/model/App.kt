package dev.quabynahcodelabsllc.model

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class App(
    val id: String,
    val name: String,
    var icon: String? = null,
    var platform: String = "android",
    var url: String? = null
) : Parcelable