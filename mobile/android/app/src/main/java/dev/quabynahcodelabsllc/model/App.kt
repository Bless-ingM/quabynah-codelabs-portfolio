package dev.quabynahcodelabsllc.model

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey
import dev.quabynahcodelabsllc.Util
import kotlinx.android.parcel.Parcelize

@Parcelize
@Entity(tableName = Util.APPS)
data class App(
    @PrimaryKey
    val id: String,
    val name: String,
    var icon: String? = null,
    var platform: String = "android",
    var url: String? = null
) : Parcelable