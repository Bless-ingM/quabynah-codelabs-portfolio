package dev.quabynahcodelabsllc.view.apps

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.DefaultItemAnimator
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.bottomsheet.BottomSheetDialogFragment
import dev.quabynahcodelabsllc.R
import kotlinx.android.synthetic.main.fragment_app_item.view.*
import kotlinx.android.synthetic.main.fragment_app_list_dialog.*

/**
 *
 * A fragment that shows a list of applications developed by Quabynah Codelabs LLC.
 */
class AppListDialogFragment : BottomSheetDialogFragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_app_list_dialog, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        list.layoutManager = LinearLayoutManager(context)
        list.adapter = AppAdapter(30)
        list.itemAnimator = DefaultItemAnimator()
    }

    private inner class ViewHolder internal constructor(
        inflater: LayoutInflater,
        parent: ViewGroup
    ) : RecyclerView.ViewHolder(inflater.inflate(R.layout.fragment_app_item, parent, false)) {

        internal val text: TextView = itemView.text
    }

    private inner class AppAdapter internal constructor(private val mItemCount: Int) :
        RecyclerView.Adapter<ViewHolder>() {

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
            return ViewHolder(LayoutInflater.from(parent.context), parent)
        }

        override fun onBindViewHolder(holder: ViewHolder, position: Int) {
            holder.text.text = holder.text.context.getString(R.string.app_name)
        }

        override fun getItemCount(): Int {
            return mItemCount
        }
    }
}
