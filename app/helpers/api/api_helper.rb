module Api::ApiHelper
  # Wraps web service responses in a data/metadata wrapper with optional paging information. If
  # Kaminari is used to paginate results, the metadata section will be filled in automatically.
  #
  # ==== Parameters
  #
  # [json]
  #   The Jbuilder json object used during rendering.
  #
  # [collection]
  #   An optional collection that has been rendered into the json object.
  #
  # ==== Example
  #
  #   wrap(json, @widgets) do
  #     json.array!(@widgets) do |widget|
  #       json.partial! 'api/v1/widgets/widget', widget: widget
  #     end
  #   end
  #
  #   # Results in the following JSON:
  #
  #   {
  #     "data": [
  #       {
  #         "id": "64d80a92-7a62-469b-b811-771425dee498",
  #         "issued_at": "2014-04-01T09:41:00.000-05:00",
  #         "issued_to": "First Last",
  #         "created_at": "2014-04-24T13:14:30.000-04:00",
  #         "updated_at": "2014-04-24T13:14:30.000-04:00"
  #       }
  #     ],
  #     "metadata": {
  #       "count": 1,
  #       "current_page": 1,
  #       "total_count": 1,
  #       "total_pages": 1
  #     }
  #   }
  #
  def wrap(json, collection = nil, additional_metadata = nil)
    json.data do
      yield if block_given?
    end
    json.metadata do
       # Kaminari
      if collection.respond_to? :current_page
        json.count collection.count
        json.current_page collection.current_page
        json.total_count collection.total_count
        json.total_pages collection.total_pages
      elsif collection.respond_to? :count
        json.count collection.count
        json.current_page 1
        json.total_count collection.count
        json.total_pages 1
      else
        json.merge!({})
      end
      if additional_metadata
        json.merge!(additional_metadata)
      end
    end
  end
end